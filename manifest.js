
{
// The version of the manifest, so ROM Manager knows how to load it
version: 1,
// The homepage for your ROM, if you have one.
homepage: "http://thelinuxmotion.org/Android/Conical/Conical_Index.html",
// The donate link for yuor ROM, if you have one.
donate: "https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=HeqF7YGyTVm1P4qveS3wNyGLIOXO1k3fUGqABorvAqj0_sJzKfGtBoddbnW&dispatch=5885d80a13c0db1f8e263663d3faee8d9384d85353843a619606282818e091d0",

// Your list of ROMs
	roms:
	[
	   {
		// Display name of the rom
		name: "ConicalRom-0.7.0.1",
		// Display summary of the rom
		summary: "Stable but with a signiture",
		// Device that this rom runs on
		device: "inc",
		product: "ConicalRoms"
		incremental: 0701
		modversion: "ConicalRoms-0.7.0.1",


		// screenshots:
	        [
	        "http://www.thelinuxmotion.org/Android/Conical/ConicalRomsPics/Screenshots/screenshot_4.png",
	        "http://www.thelinuxmotion.org/Android/Conical/ConicalRomsPics/Screenshotsscreenshot_3.png"
	        ],

		// This is the download URL of your ROM.
		// These URLs should have unique filenames per version!
		// Ie, don't use a zip with the same name
		// as that of a previous version with a new version.
		// Otherwise ROM Manager will continue using the
		// old cached zip on the SD card.
		// This must be a direct download,
		// and not a Mediafire type link.
		url: "http://www.thelinuxmotion.org/Android/Conical/ROMS/Conical_Version_07.1.zip"

		addons:
	        [
	        {
	            name: "Kernels (Some may be untested)",
	            urls:
	            [
	            "http://www.thelinuxmotion.org/Android/Conical/Kernels/KiNgxKernel-Evo-AOSP-1-2.6.32.21-Flashable.zip"
"http://www.thelinuxmotion.org/Android/Conical/Kernels/KiNgxKernel-Inc-AOSP-1-BFS330-2.6.32.15-Flashable.zip"
"http://www.thelinuxmotion.org/Android/Conical/Kernels/Ziggy471Kernel-INC-AOSP-update_signed-10262010-0508.zip"
	            ]
	        }
	  
	        ]




	   },

	// Another, older ROM!
	   {
		name: "ConicalRom 0.6.0.0",
		summary: "Stable but with out a signiture",
		device: "inc",
		product: "ConicalRoms"
		incremental: 0600
		url: "http://www.thelinuxmotion.org/Android/Conical/ROMS/Conical_Version_.06.zip"
	   }
	// Another, older ROM!
	   {
		name: "ConicalRom 0.5.0.1",
		summary: "Highly unstable with libgsl",
		device: "inc",
		product: "ConicalRoms"
		incremental: 0501
		url: "http://www.thelinuxmotion.org/Android/Conical/ROMS/Broken_GSL.zip"
	   }
	// Another, older ROM!
	   {
		name: "ConicalRom 0.5.0.0",
		summary: "Mildly unstable without libgsl",
		device: "inc",
		product: "ConicalRoms"
		incremental: 0500
		url: "http://www.thelinuxmotion.org/Android/Conical/ROMS/Working_No_GSL.zip"
	   }
	// Another, older ROM!
	   {
		name: "ConicalRom 0.1.0.0",
		summary: "Stable",
		device: "inc",
		product: "ConicalRoms"
		incremental: 0100
		url: "http://www.thelinuxmotion.org/Android/Conical/ROMS/Working_Generic.zip"
		addons:
		[
		{
		 name: "Preliminary fixes by esoterichs",
	            urls:
	            [
	            "http://www.thelinuxmotion.org/Android/Conical/ROMS/conical-fixes.zip"
	            ]
	        

		}
		]
	   }

	]
}
