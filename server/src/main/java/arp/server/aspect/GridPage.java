package arp.server.aspect;

import java.util.List;

public class GridPage<T> {

    private boolean success;

    private long totalCount;

    List<T> data;

    public GridPage(boolean success, long totalCount, List<T> data) {
        this.success = success;
        this.totalCount = totalCount;
        this.data = data;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(long totalCount) {
        this.totalCount = totalCount;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }
}
