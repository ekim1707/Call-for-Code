package models;
import javax.persistence.*;
import java.util.Set;

/**
 * @author Diego Orlando Mejia Salazar
 */
@Entity
@Table(name="authentication_user")
public class User {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "authentication_user_id")
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "authentication_user_role", joinColumns = @JoinColumn(name = "authentication_user_id"), inverseJoinColumns = @JoinColumn(name = "authentication_role_id"))
    private Set<Role> roles;

}
