package tr.com.ias.entity.table;

import java.util.List;

public class iasHtmlTableColumn {

	private String header;
	private Integer priority;
	private List<iasHtmlTableRow> rows;

	
	public iasHtmlTableColumn() {
		
	}

	public String getHeader() {
		return header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

	public Integer getPriority() {
		return priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	public List<iasHtmlTableRow> getRows() {
		return rows;
	}

	public void setRows(List<iasHtmlTableRow> rows) {
		this.rows = rows;
	}

}
