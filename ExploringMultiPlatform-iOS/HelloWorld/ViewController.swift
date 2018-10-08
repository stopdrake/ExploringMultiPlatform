//
//  ViewController.swift
//  HelloWorld
//
//  Created by Vivek Singh on 08/10/18.
//  Copyright © 2018 Vivek Singh. All rights reserved.
//

import UIKit
import Demo

class ViewController: UIViewController {

    @IBOutlet weak var label: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        label.text = HelloWorldKt.getHelloWorld()
    }


}

