package demo.multiplat

fun sendGreeting(platform: Platform, name: String): String {
    return "Common: Hi $name, Welcome to ${platform.name}"
}