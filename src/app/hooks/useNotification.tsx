import {
  isPermissionGranted,
  requestPermission,
  sendNotification
} from "@tauri-apps/api/notification"

export const useNotitifcation = () => {
  const checkPermission = async () => {
    await isPermissionGranted().then(async (permissionGranted) => {
      if (!permissionGranted) {
        await requestPermission()
      }
    })
  }

  const emitNotification = async (title: string, body: string) => {
    await checkPermission()
    sendNotification({ title, body })
  }

  return {
    emitNotification
  }
}
