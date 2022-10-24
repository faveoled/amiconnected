import webview
import os

full_location = os.path.join(os.path.dirname(os.path.realpath(__file__)), os.path.join("ui", "index.html"))
w = webview.WebView(width=400, height=300, title="Am I Connected", url="file://" + full_location, resizable=True, debug=False)
w.run()
