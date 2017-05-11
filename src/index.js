import './Config/env.js'

import Nightmare from 'nightmare'
import ClearScreen from 'clear'
import Promise from 'bluebird'

import promptJob from './Lib/promptJob'
import promptAccountInfo from './Lib/promptAccountInfo'
import { openLoginPage, login } from './Lib/login'
import { openCoursesPage, extractCoursesList } from './Lib/courses'
import { openVideosPage, extractVideosList } from './Lib/videos'
import downloadVideos from './Lib/downloadVideos'
import { saveFile } from './Lib/file'
import getStoredCourses from './Lib/getStoredCourses'
import {
    promptCoursesForExtraction,
    promptStoredCourses,
} from './Lib/promptCourses'

async function start() {
    ClearScreen()

    const guide = `
    Downloading Code School videos from this program is a two step process:

    1)  First you need to extract the links of the courses you want to 
        download. This will create a 'courses.json' file in current 
        working directory and save all the extracted information needed
        to download the videos in that file. 

    2)  Once you have extracted the information to download videos and have
        it saved in 'courses.json' file, you can select any of those courses
        to download

    `
    console.log(guide)

    // get storedCourses from `courses.json`
    const storedCourses = await getStoredCourses()

    // ask what user wants to do:
    // Extract info or Download videos
    const job = await promptJob()

    if (job === 'Extract Courses Information') {
        const nightmare = new Nightmare({
            show: true,
            waitTimeout: 50000,
            alwaysOnTop: false,
            darkTheme: true,
        })

        // get account info from user and attempt to login
        const { username, password } = await promptAccountInfo()
        await openLoginPage(nightmare)
        await login(nightmare, username, password)

        // open courses page and get the list of all the courses codeschool
        // provides, then prompt the user which courses needs to be downloaded
        await openCoursesPage(nightmare)
        const coursesList = await extractCoursesList(nightmare)
        const selectedCourses = await promptCoursesForExtraction(coursesList)

        // from the selected courses, take the courses that are remaining to
        // be saved in `courses.json` file and extract video links for those
        // courses. Then update `course.json` file with the new `storedCourses`
        const remainingCourses = selectedCourses.filter(
            course => !storedCourses[course.title],
        )

        // extract video links for new courses
        // and save after extracting each course
        await Promise.each(
            remainingCourses,
            async course => {
                console.log()
                console.log(`Extracting video links for ${course.title}`)
                console.log()
                await openVideosPage({ nightmare, course })
                const videos = await extractVideosList(nightmare)
                storedCourses[course.title] = Object.assign(course, { videos })
                await saveFile(storedCourses)
            },
        )
        await nightmare.end()
        console.log('Compeleted extracting video links.')
    } else if (job === 'Download Videos') {
        // the length of courses stored in `courses.json` file
        const length = Object.keys(storedCourses).length
        if (length <= 0) {
            console.log()
            console.log('You have not extracted any courses Information')
            console.log('Please Extract first.')
            console.log()
            return
        }

        // let the user select the courses he wants to download from
        // `courses.json` file
        const selectedCourses = await promptStoredCourses(storedCourses)
        console.log()
        console.log('Starting to download videos...')
        await Promise.each(selectedCourses, async title => {
            const course = storedCourses[title]
            ClearScreen()
            console.log()
            console.log(
                '---------------------------------------------------------',
            )
            console.log(`Downloading videos for ${title}`)
            console.log(
                '---------------------------------------------------------',
            )
            await downloadVideos(course)
        })
        console.log()
        console.log('Completed downloading all videos.')
    }
}
start()

/* eslint import/first: off */ 
