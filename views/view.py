from PyQt5.QtWidgets import QMainWindow

from views.widgets import CustomWidget


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        self.setWindowTitle("Main Window")
        self.setGeometry(100, 100, 800, 600)

        central_widget = CustomWidget()
        self.setCentralWidget(central_widget)
