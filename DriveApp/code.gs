function listFiles() {
  const id = "12OkVCjbsFMju0DiKExi1DSjmCa22WOvM";
  const folder = DriveApp.getFolderById(id);
  const files = folder.getFiles();
  // Logger.log(files)
  while (files.hasNext()) {
    const file = files.next();
    Logger.log(file.getName());
    Logger.log(file.getDownloadUrl());
  }
}
