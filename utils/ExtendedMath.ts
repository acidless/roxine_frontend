class ExtendedMath {
  public static map(val, fromLow, fromHigh, toLow, toHigh) {
    return ((val - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow) + 1;
  }
}

/*====================*/

export default ExtendedMath;
