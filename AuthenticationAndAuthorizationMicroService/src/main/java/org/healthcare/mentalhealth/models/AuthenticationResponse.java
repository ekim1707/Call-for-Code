package org.healthcare.mentalhealth.models;

public class AuthenticationResponse {
    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    private String jwt;
}
