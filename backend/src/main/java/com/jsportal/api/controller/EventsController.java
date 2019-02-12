package com.jsportal.api.controller;

import com.jsportal.api.domain.EventRequest;
import com.jsportal.api.model.Events;
import com.jsportal.api.repository.EventsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/events")
public class EventsController {

    private final Logger logger = LoggerFactory.getLogger(EventsController.class);

    @Autowired
    private EventsRepository eventsRepository;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public @ResponseBody String addNewEvent(@RequestBody EventRequest request) {

        Events event = new Events();
        event.setTitle(request.getTitle());
        event.setDescription(request.getDescription());

        logger.info("EventsController.addNewEvent title: {}, description: {}", event.getTitle(), event.getDescription());

        eventsRepository.save(event);
        return "saved";
    }
}
