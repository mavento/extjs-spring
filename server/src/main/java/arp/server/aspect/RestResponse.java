package arp.server.aspect;

/**
 * Created by christian on 10/04/17.
 */
public class RestResponse {

    private int status;
    private String message;
    private Object data;

    public RestResponse(int status, Object data) {
        this.status = status;
        this.data = data;
    }

    public RestResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
