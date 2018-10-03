////////////////////////////////
// translates polarity names into BETTER, FASTER, STRONGER versions
exports.run = (name) => {
  name = name.toLowerCase();
  switch (name){
    case "madurai":
      return "Madurai (V)";
    case "vazarin":
      return "Vazarin (D)";
    case "naramon":
      return "Naramon (-)";
    case "zenurik":
      return "Zenurik (=)";
    case "unairu":
      return "Unairu (R)";
    case "penjaga":
      return "Penjaga (Y)";
    case "umbra":
      return "Umbra (U)";
    default:
      return name;
  }
}