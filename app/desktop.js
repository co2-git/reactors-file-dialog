import {remote} from 'electron';

const {dialog} = remote;

export default function ReactorsFileDialogDesktop() {
  return new Promise((resolve, reject) => {
    try {
      dialog.showOpenDialog(
        {
          properties: [
            'openDirectory',
            'createDirectory',
            'showHiddenFiles',
          ],
        },
        (filePaths = []) => {
          resolve(filePaths);
        },
      );
    } catch (error) {
      reject(error);
    }
  });
}
