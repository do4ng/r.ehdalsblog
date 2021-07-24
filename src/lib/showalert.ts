type t = "error" | "warn" | "message";

const emoji = {
  error: "❗",
  warn: "⚠",
  message: "💬",
};

export default function showalert(newValue: string, type: t = "message"): void {
  const alert = document.getElementById("alert");
  const alertcontent = document.getElementById("alert-content");
  alertcontent.innerHTML = `${emoji[type]} ${newValue}`;
  alert.classList.add("alert-show", `alert-${type}`);
  setTimeout(() => {
    document.getElementById("alert").classList.remove("alert-show");
    document.getElementById("alert").classList.remove("alert-warn");
    document.getElementById("alert").classList.remove("alert-error");
    document.getElementById("alert").classList.remove("alert-message");
  }, 5500);
}
