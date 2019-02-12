package com.jsportal.api.model;

import javax.persistence.*;

@Entity
@Table(name = "timeline_event", uniqueConstraints = { @UniqueConstraint(columnNames = {"timeline_event_id"}) })
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "timeline_event_id", unique = true, nullable = false)
    private int timeline_event_id;

    private String title;

    private String description;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTimeline_event_id() {
        return timeline_event_id;
    }

    public void setTimeline_event_id(int timeline_event_id) {
        this.timeline_event_id = timeline_event_id;
    }
}
