from PyQt5.QtWidgets import QMainWindow
# from ui.mainwindow_ui import Ui_MainWindow
from ui.xyz_viewer import Ui_MainWindow

class MainWindow(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        # self.init_ui()

    # def init_ui(self):
    #     self.setWindowTitle("Main Window")