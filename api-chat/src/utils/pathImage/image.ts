const getPathImage = (file:Express.Multer.File) => {
    const filePath = file.path;
    const fileSplit = filePath.split('/');
    return `${fileSplit[2]}/${fileSplit[3]}`;
};
export {getPathImage};
