class JsDateTime {
  constructor(date) {
    this.date = date;
  }

  getIsoFormat(
    dateOnly = false,
    seconds = true,
    timezone = true,
    offset = "+00:00"
  ) {
    const year = this.date.getFullYear();
    const month = ("0" + (this.date.getMonth() + 1)).slice(-2);
    const day = ("0" + this.date.getDate()).slice(-2);
    const hour = ("0" + this.date.getHours()).slice(-2);
    const min = ("0" + this.date.getMinutes()).slice(-2);
    const sec = ("0" + this.date.getSeconds()).slice(-2);
    let resp = `${year}-${month}-${day}`;
    if (dateOnly) return resp;

    resp += `T${hour}:${min}`;
    if (seconds) {
      resp += ":00";
    }
    if (timezone) {
      resp += offset;
    }
    return resp;
  }

  getGreekFormat(dateOnly = false, timeSeparator = "") {
    const year = this.date.getFullYear();
    const month = ("0" + (this.date.getMonth() + 1)).slice(-2);
    const day = ("0" + this.date.getDate()).slice(-2);
    const hour = ("0" + this.date.getHours()).slice(-2);
    const min = ("0" + this.date.getMinutes()).slice(-2);
    let resp = `${year}/${month}/${day}`;
    if (dateOnly) return resp;

    resp += `${timeSeparator}${hour}:${min}`;
    return resp;
  }
}

export default JsDateTime;
