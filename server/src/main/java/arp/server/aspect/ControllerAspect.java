package arp.server.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class ControllerAspect {

    @Pointcut("@annotation(arp.server.aspect.GridRequest)")
    public void gridRequestAspect() {
    }

    @Around("gridRequestAspect()")
    public Object doAround(final ProceedingJoinPoint pjp) throws Throwable {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String sort = request.getParameter("sort"), dir = request.getParameter("dir");
        Integer limit = Integer.valueOf(request.getParameter("limit"));
        Object[] args = pjp.getArgs();

        PageRequest pageRequest = (PageRequest) args[0];
        Sort.Direction pageSort = dir.equals("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC;
        args[0] = new PageRequest(pageRequest.getPageNumber(), limit, pageSort, sort);
        return pjp.proceed(args);
    }


}
