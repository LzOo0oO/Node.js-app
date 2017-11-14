
function sortAjax(num = 1, numOne = 0) {
  $.ajax({
    method: "post",
    url: "/lz",
    data: {min1: $(".lz-con-head-b > dl:eq(0) > dd.active").data("min"),
          max1: $(".lz-con-head-b > dl:eq(0) > dd.active").data("max"),
          min2: $(".lz-con-head-b > dl:eq(1) > dd.active").data("min"),
          max2: $(".lz-con-head-b > dl:eq(1) > dd.active").data("max"),
          name: $(".lz-con-head-b > dl:eq(2) > dd.active").data("name"),
          type: $(".lz-con-con-header > dl > dd.active").data("sort"),
          numOne: numOne,
          sort: num
        }
  }).done(function (data, status, jqXHR) {

    $(".lz-connect-con").get(0).innerHTML = "";
    data.forEach(elem => {
      $(".lz-connect-con").get(0).innerHTML += `
      <div class="lz-con-con-con">
        <h1>${elem.title}</h1>

        <ul>
          <li>
            <span>${elem.incomeNum}</span>
            <sub>${elem.income}</sub>
            <p>测算年化收益率</p>
          </li>
          <li>
            <p>借款期限：<span>${elem.year}天</span></p>
            <p>还款方式：<span>${elem.yearType}</span></p>
          </li>
          <li>
            <p>筹集金额：<span>${elem.money}</span></p>
            <p>产品星级：
              <div>
                <div style="width: ${elem.star}%;"></div>
              </div>
            </p>
          </li>
          <li>
            <p>投资进度：<span>${elem.program }%</span><i><i  style="width: ${elem.program}%;"></i></i></p>
            <p>可投金额：<span>${elem.mayMoney}</span></p>
          </li>
          <li>
            <div data-target= ${elem.src}>立即加入</div>
          </li>
        </ul>
      </div>
      `;
    });
  }).fail(function (jqXHR, status, err) {
    console.log(err);
  });
};

$(".lz-con-head-b > dl").children("dd").click(function() {
  $(this).attr("class", "active").siblings().removeAttr("class");
  sortAjax();
});



$(".lz-con-sort > dl > dd").click(function() {
  $(this).attr("class", "active").siblings().removeAttr("class");

  if ($(this).children().html()  == "∧") {
    $(this).children().html("∨");
    sortAjax(-1);
  } else {
    $(this).children().html("∧");
    sortAjax();
  };
});
