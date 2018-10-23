package demo.multiplat.myapplication

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.app.AlertDialog
import demo.multiplat.sendGreeting
import demo.multiplat.getPlatform
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        greeting.setOnClickListener {
            AlertDialog.Builder(this).
                    setTitle(sendGreeting(getPlatform(), name.text.toString()))
                    .setPositiveButton("Dismiss") { dialog, _ ->
                        dialog.dismiss()
                    }
                    .show()
        }
    }
}
