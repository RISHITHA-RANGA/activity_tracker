document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get(["activityList"], function (result) {
    const activityList = result.activityList || [];
    const activityListContainer = document.getElementById("activityList");

    activityList.forEach((activity) => {
      const activityDiv = document.createElement("div");
      activityDiv.classList.add("activity");
      activityDiv.innerHTML = `<span class="website">${activity.website}</span> - <span class="time">${activity.time}</span>`;
      activityListContainer.appendChild(activityDiv);
    });
  });
});
