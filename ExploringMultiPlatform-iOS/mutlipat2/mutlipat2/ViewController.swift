//
//  ViewController.swift
//  mutlipat2
//
//  Created by Vivek Singh on 23/10/18.
//  Copyright © 2018 Vivek Singh. All rights reserved.
//

import UIKit
import KMulti

class ViewController: UIViewController {

    @IBOutlet weak var label: UILabel!
    @IBAction func clicked(_ sender: Any) {
        let greeting  = CommonKt.sendGreeting(platform: PlatformKt.getPlatform(),
                              name: tf.text ?? "No Name")
        label.text = greeting
    }
    
    @IBOutlet weak var tf: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        label.text = ""
    }


}

