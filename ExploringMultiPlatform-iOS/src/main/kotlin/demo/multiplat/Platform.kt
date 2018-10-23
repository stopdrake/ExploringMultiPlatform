package demo.multiplat

import platform.UIKit.UIDevice

actual class Platform {
  actual val name: String
    get() =UIDevice.currentDevice.systemName()
}

actual fun getPlatform(): Platform {
  return Platform()
}
