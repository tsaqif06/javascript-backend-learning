// Seperti yang Anda ketahui sebelumnya bahwa kita dapat mewariskan property dan method ke class lainnya. Namun, apa yang terjadi jika SubClass ingin mengubah implementasi dari method yang diwariskan dari SuperClass? Layaknya kita sebagai anak, ingin mengubah suatu sifat atau perilaku dari orang tua yang kita mungkin tidak setuju atau butuhkan. Jangan khawatir, di OOP kita dapat mengubah implementasi method yang diturunkan dari SuperClass.

// overriding gammpangnya, ngeganti sifatnya parent
class SmartPhones {
	constructor(color, brand, model) {
		this.color = color;
		this.brand = brand;
		this.model = model;
	}

	charging() {
		console.log(`Charging ${this.model}`);
	}
}

class Android extends SmartPhones {
	constructor(color, brand, model, device) {
		super(color, brand, model);
		this.device = device;
	}

	charging() {
		super.charging();
		console.log(`Charging ${this.model} with fast charger`);
	}

	splitScreen() {
		console.log("Android have a Split Screen");
	}
}

const android = new Android("white", "B", "Galaxy S21", "smart TV");

android.charging();

/**
 * Output:
 * Charging Galaxy S21
 * Charging Galaxy S21 with fast charger
 */
