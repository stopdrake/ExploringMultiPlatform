package demo.multiplat

actual class Platform {
    actual val name: String
        get() = "JVM"
}

actual fun getPlatform(): Platform {
    return Platform()
}