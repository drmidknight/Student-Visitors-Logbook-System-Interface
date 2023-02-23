function generateTodayReport(){
    var DisplayReportInfo = document.getElementById("tableResults");
var report = "TodayReport";

  if(report == ''){
    DisplayReportInfo.innerHTML = '';
  }
    var xhr = new XMLHttpRequest();
    // console.log(xhr);


    xhr.open("POST","../includes/form-action.php?Todayreport="+report, true);
    xhr.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            DisplayReportInfo.innerHTML = this.responseText;
            console.log(this.responseText);
            
        }
    }

    xhr.send();
}

function generateBookReport(){
    var fromDate = document.getElementById("fromDate").value;
    var ToDate = document.getElementById("ToDate").value;

    var DisplayReportInfo = document.getElementById("tableResults");
    
    
var xhr = new XMLHttpRequest();
        console.log(xhr);
        xhr.open("POST","../includes/form-action.php?rangeAttendance&fromDate="+fromDate+"&ToDate="+ToDate, true);
        xhr.onload = function(){
            if(this.readyState == 4 && this.status == 200){
                DisplayReportInfo.innerHTML = this.responseText;
                console.log(this.responseText);
            }
        }

        xhr.send();

}