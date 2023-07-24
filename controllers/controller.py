from PyQt5.QtWidgets import QMessageBox


class Controller:
    def __init__(self, view):
        self.view = view
        self.view.import_button.clicked.connect(self.on_import_button_click)
        self.view.export_button.clicked.connect(self.on_export_button_click)

    def on_import_button_click(self):
        # Add import logic here
        QMessageBox.information(self.view, "Import", "Import button clicked!")

    def on_export_button_click(self):
        # Add export logic here
        QMessageBox.information(self.view, "Export", "Export button clicked!")
