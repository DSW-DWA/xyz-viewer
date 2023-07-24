from PyQt5.QtWidgets import QHBoxLayout, QLabel, QListWidget, QPushButton, QVBoxLayout, QWidget


class CustomWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        self.import_button = QPushButton("Import")
        self.export_button = QPushButton("Export")
        self.image_label = QLabel("Image Placeholder")
        self.listbox_label = QLabel("Listbox:")
        self.listbox = QListWidget()

        layout = QVBoxLayout()
        button_layout = QHBoxLayout()
        button_layout.addWidget(self.import_button)
        button_layout.addWidget(self.export_button)
        layout.addLayout(button_layout)
        layout.addWidget(self.image_label)
        layout.addWidget(self.listbox_label)
        layout.addWidget(self.listbox)

        self.setLayout(layout)
