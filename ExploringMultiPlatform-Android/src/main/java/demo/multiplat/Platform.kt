package demo.multiplat

actual class Platform {
    actual val name: String
        get() = "Android"
}

actual fun getPlatform(): Platform {
    return Platform()
}