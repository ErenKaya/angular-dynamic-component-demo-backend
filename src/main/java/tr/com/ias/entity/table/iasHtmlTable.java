package tr.com.ias.entity.table;

import java.util.ArrayList;
import java.util.List;

import tr.com.ias.entity.iasHtmlComponent;

public class iasHtmlTable extends iasHtmlComponent {
	private List<iasHtmlTableColumn> columns;

	public List<iasHtmlTableColumn> getColumns() {
		return columns;
	}

	public void setColumns(List<iasHtmlTableColumn> columns) {
		this.columns = columns;
	}

	public List<String> getHeaders() {
		if (columns != null) {
			List<String> headerList = new ArrayList<>();
			for (iasHtmlTableColumn column : columns) {
				headerList.add(column.getHeader());
			}
			return headerList;
		}
		return null;
	}

}
