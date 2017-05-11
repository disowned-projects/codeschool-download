import Url from 'url'

export const openVideosPage = async ({ nightmare, course }) => {
    await nightmare
        .goto(course.link)
        .wait('#course-go-to-link')
        .catch(console.log)
}

export const parseVideoInfo = string => {
    if (!string) return []
    const startString = '"media":['
    const endString = '"}]'
    // find index of first '[' in the string to extract the array
    const start = string.indexOf(startString) + (startString.length - 1)
    // index of last ']'
    const end = string.indexOf(endString) + endString.length
    if (end < 0 || start < 0) return []
    if (string[start] !== '[' || string[end - 1] !== ']') return []
    // the array storing the information of all videos
    const arr = JSON.parse(string.slice(start, end))
    // parse the information from previous array in more useful form
    // to download
    const parsedArray = arr.map(video => {
        const { title, videoId, media } = video
        const parsedUrl = Url.parse(media, true)
        const { sso, site } = parsedUrl.query
        const downloaded = false
        const url =
            'https://projector.codeschool.com/videos/' +
            videoId +
            '.mp4?' +
            'profile=480p&' +
            'site=' +
            site +
            '&' +
            'sso=' +
            sso
        return {
            title,
            site,
            videoId,
            sso,
            url,
            downloaded,
        }
    })
    return parsedArray
}

export const extractVideosList = async nightmare => {
    // the last script in the current nightmare page contains all information 
    // to put togther a list with the name of video and its url, so extract it
    const lastScriptContent = await nightmare.evaluate(() => {
        const scripts = $('script').toArray()
        const lastScript = scripts[scripts.length - 1]
        return lastScript.innerHTML
    })
    return parseVideoInfo(lastScriptContent)
}
