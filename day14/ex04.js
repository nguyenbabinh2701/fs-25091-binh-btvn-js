function MaskEmail(email) {
    if (!email.includes("@")) {
        return email; 
    }
    let parts = email.split("@");
    let local = parts[0];
    let domain = "@" + parts[1];
    if (local.length <= 2) {
        return email;
    }
    let firstTwo = local.substring(0, 2);
    let lastTwo = local.substring(local.length - 2);
    let masked = firstTwo + "***" + lastTwo + domain;
    return masked;
}

console.log(MaskEmail("phuong2003@gmail.com"));
