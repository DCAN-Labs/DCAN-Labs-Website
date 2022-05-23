d3.selectAll(".software-item").on("click", function(){
    var item = d3.select(this);
    var id = d3.select(this).attr('id');
    if (!item.classed("software-item-hidden")) {
        d3.selectAll(".software-item").classed("software-item-selected", false);
        d3.selectAll(".software-item").classed("software-item-hidden", true);
        item.classed("software-item-hidden", false);
        item.classed("software-item-selected", true);
        d3.select(`#${id}-info`).classed("software-info-active", true);
    }
})

document.onclick = function (e) {
    var eventTarget = d3.select(e.target);
    var reset = false;
    if (eventTarget.attr('class') == null) {
        reset = true;
    } else if (!eventTarget.attr('class').includes("software-image")) {
        reset = true;
    }
    if (reset) {
        d3.selectAll(".software-item").classed("software-item-selected", false);
        d3.selectAll(".software-item").classed("software-item-hidden", false);
        d3.selectAll(".software-info").classed("software-info-active", false);
    }
}