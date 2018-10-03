//////////////////////////////
// returns a random thonk
var thonks = [
		":thinking:",
		"<:thonk:453599203701293056>",
		"<:thinkception:488487322673741824>",
		"<:kronk:488817045467693069>",
		"<:thowonk:488817717047197725>",
		"<:think_together:488821658438860822>",
		"<:think_thong_thang:488823304807776276>",
		"<:6inking:488825550459371540>",
		"<:in_thonk_we_trust:488827943024590848>",
		"<:sirthonk:488829781559738378>",
		"<:thegg:488832283445559307>",
		"<:ithink:488835442310119435>",
		"<:ithonk:488837272389812227>",
		"<:placeholder:488840539169619992>",
    "<:gray_thonk:491331837776625664>"
	];

exports.run = () => {
  var x = Math.floor(Math.random()*thonks.length);
  return thonks[x];
}