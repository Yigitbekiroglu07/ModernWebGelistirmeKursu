function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit)
}

for (i = 1; i <= 8; i++) {
    console.log(i + ".Kolon")
    for (j = 1; j <= 6; j++) {
        console.log(sayiUret());
    }
}
