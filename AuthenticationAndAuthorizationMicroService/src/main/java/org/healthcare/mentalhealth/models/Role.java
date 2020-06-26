package org.healthcare.mentalhealth.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "authentication_role")
public class Role {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "authentication_role_id")
    private int id;

    @Column(name = "role_name")
    private String role;

    @Column(name = "role_description")
    private String desc;
}