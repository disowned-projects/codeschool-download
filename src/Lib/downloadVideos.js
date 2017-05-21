import Case from 'case'
import Request from 'request'
import ProgressBar from 'progress'
import Bytes from 'bytes'
import Fs from 'fs-extra'
import Promise from 'bluebird'

import { saveFile } from './file'
import getStoredCourses from './getStoredCourses'

const download = (url, filePath) =>
    new Promise((resolve, reject) => {
        let bar
        let transfered = 0
        const req = Request(url)
        req
            .on('data', chunk => {
                const length = req.response.headers['content-length']
                const total = parseInt(length, 10)
                const size = Bytes(total)
                transfered += +chunk.length
                const downloaded = Bytes(transfered)
                const barString =
                    '[:bar] :percent ' +
                    'total: ' +
                    size +
                    ' ' +
                    'downloaded: :downloaded'
                bar =
                    bar ||
                    new ProgressBar(barString, {
                        complete: '*',
                        incomplete: ' ',
                        width: 20,
                        total,
                    })
                bar.tick(chunk.length, { downloaded })
            })
            .on('error', reject)
            .on('end', resolve)
            .pipe(Fs.createWriteStream(filePath))
    })

export default async course => {
    // make sure folder with the name of course's title exists
    const folderName = Case.kebab(course.title)
    const basePath = process.cwd() + '/' + folderName + '/'
    await Fs.ensureDirSync(basePath)

    // download each videos in the course if it is not already downloaded
    const { videos } = course
    const total = videos.length
    if (total <= 0) {
        console.log('No videos to download in this course.')
        return
    }
    await Promise.each(videos, async (video, index) => {
        const fileName = (index + 1) + '-' + Case.kebab(video.title)
        const filePath = basePath + fileName + '.mp4'
        console.log()
        console.log(`Downloading '${video.title} (${index + 1} of ${total})'`)
        if (video.downloaded) {
            console.log('  Already Downloaded')
            return
        }
        await download(video.url, filePath)
        const storedCourses = await getStoredCourses()
        storedCourses[course.title].videos[index].downloaded = true
        await saveFile(storedCourses)
    })
}
