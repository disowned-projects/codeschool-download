import Fs from 'fs-extra'

export const coursesJsonPath = process.cwd() + '/courses.json'

export const saveFile = async (fileData, filePath = coursesJsonPath) => {
    fileData = JSON.stringify(fileData, null, 4)
    await Fs.writeFile(filePath, fileData)
}
