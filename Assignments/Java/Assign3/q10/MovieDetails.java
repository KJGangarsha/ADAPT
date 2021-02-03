package z10;

public class MovieDetails {
	  private String movieName;
	    private String actor;
	    private String actress;
	    private String genre;
	    public MovieDetails(String movieName, String actor, String actress, String genre) {
	        super();
	        this.movieName = movieName;
	        this.actor = actor;
	        this.actress = actress;
	        this.genre = genre;
	    }
	    
	    
	    public String getMovieName() 
	    {
	    	return movieName;
	    }
	    
	    public String getActor() 
	    {
	    	return actor;
	    }
	    
	    public String getActress() 
	    {
	    	return actress;
	    }
	    
	    public String getGenre() 
	    {
	    	return genre;
	    }
	    
	    public void setMovieName(String movieName) 
	    {
	    	this.movieName = movieName;
	    }
	    
	    public void setActor(String actor) 
	    {
	    	this.actor = actor;
	    }
	    
	    public void setActress(String actress) 
	    {
	    	this.actress = actress;
	    }
	    
	    public void setGenre(String genre) 
	    {
	    	this.genre = genre;
	    }
	    
	    public String toString()
	    { 
	    	return "MovieName: "+this.movieName+"  Actor: "+this.actor+"  actress: "+this.actress+"  genre: "+this.genre+"  ";
	    }
}
