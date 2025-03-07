async function scheduleHtmlProvider(
  iframeContent = "",
  frameContent = "",
  dom = document
) {
  //函数名不要动
  //以下可编辑
  //by.ziyii
  await loadTool("AIScheduleTools");
  await AIScheduleAlert(
    "目前本地测试通过,本人账号通过,测试实例过少,不确保完全没有bug,如遇到bug,请联系我temp@ziyii.top"
  );
  let html = "";
  try {
    let ifs = dom.getElementsByTagName("iframe");
    for (const element of ifs) {
      html = element.contentDocument
        .getElementById("kcb_container")
        .getElementsByTagName("tbody")[0].innerHTML;
    }
    return html;
  } catch (e) {
    console.error(e);
  }
}
