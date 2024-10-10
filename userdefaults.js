// Telegram: @killedhookblog userdefault variable 

if (ObjC.available) {
    try {
        var NSUserDefaults = ObjC.classes.NSUserDefaults;
        var mainBundle = ObjC.classes.NSBundle.mainBundle();
        var appIdentifier = mainBundle.bundleIdentifier().toString();
        console.log("Hedef: " + appIdentifier);

        
        var defaults = NSUserDefaults.standardUserDefaults();

        //hooked
        var key = "andrevmaskwashere"; //target keyword
        defaults.setBool_forKey_(false, key); // bool
        console.log("Kanca takıldı. andrevgeldikizlar"); 

    } catch (fix) {
        console.fix("Error: " + fix.message);
    }
} else {
    console.fix("Kanca takılamadı.");
}