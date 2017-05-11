export const openCoursesPage = async nightmare => {
    await nightmare
        .goto('https://www.codeschool.com/courses')
        .wait('a.course-title-link')
        .catch(console.log)
}

export const extractCoursesList = async nightmare => {
    const coursesList = await nightmare.evaluate(() => {
        const courses = $('a.course-title-link').toArray()
        return courses.map(course => ({
            title: course.innerHTML,
            link: `${course.href}/videos`,
        }))
    })
    return coursesList
}
