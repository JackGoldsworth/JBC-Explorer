package me.jackgoldsworth.webapp.controller

import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.lang.StringBuilder


@RestController
@RequestMapping("/v1/")
class CompilerController {

    private val logger = LoggerFactory.getLogger(CompilerController::class.java)

    @PostMapping("/compile")
    fun spotifyLogin(@RequestBody code: Map<String, String>): String {
        val codeStr = code["code"] ?: error("Code was not found!")
        logger.info("Starting to compile code.")
        val tempFile = File("Temp.java")
        tempFile.writeText(codeStr, Charsets.UTF_8)
        Runtime.getRuntime().exec("javac Temp.java")
        val process = Runtime.getRuntime().exec("javap -v temp")
        process.waitFor()
        val reader = BufferedReader(InputStreamReader(process.inputStream))
        val strBuilder = StringBuilder()
        reader.readLines().forEach { strBuilder.append(it).append('\n') }
        return strBuilder.toString()
    }
}