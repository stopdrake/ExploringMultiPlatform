package demo.multiplat

actual class Platform {
    actual val name: String
        get() = "JS"
}

actual fun getPlatform(): Platform {
    return Platform()
}