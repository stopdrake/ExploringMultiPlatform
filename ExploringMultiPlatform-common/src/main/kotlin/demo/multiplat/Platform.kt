package demo.multiplat

expect class Platform {
    val name: String
}

expect fun getPlatform(): Platform