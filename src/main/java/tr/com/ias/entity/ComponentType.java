package tr.com.ias.entity;

public enum ComponentType {
	LABEL {
		public String toString() {
			return "label";
		}
	},
	TEXTFIELD {
		public String toString() {
			return "textfield";
		}
	},
	BUTTON {
		public String toString() {
			return "button";
		}
	},
	TABLE {
		public String toString() {
			return "table";
		}
	}
}
