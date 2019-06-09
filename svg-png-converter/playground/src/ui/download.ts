// import { saveAs } from 'file-saver'
// import * as JSZip from 'jszip'

// export function downloadExample() {
//   var zip = new JSZip()
//   zip.file("Hello.txt", "Hello World\n")
//   var img = zip.folder("other")
//   var blob = new Blob(["Hello, world!"], { type: "text/plaincharset=utf-8" })
//   img.file("other.txt", blob)
//   zip.generateAsync({ type: "blob" }).then(function (content) {
//     saveAs(content, "example.zip")
//   })
// }