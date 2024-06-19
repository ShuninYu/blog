import java.util.Date;
import java.util.Locale;
import java.text.SimpleDateFormat;
 
public class rfc822date {
    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss z" , Locale.US);
 
        String rfc822Time = sdf.format(new Date());
        System.out.println(rfc822Time);
    }
}