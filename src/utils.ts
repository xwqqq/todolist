class Utils {
  public static uuid(): string {
    let uuid = "";
    let random = 0;
    for (let i = 0; i < 8; i++) {
      random = (Math.random() * 10) / 1;
      uuid += random.toString();
    }
    console.log(uuid);

    return uuid;
  }
}

export { Utils };
