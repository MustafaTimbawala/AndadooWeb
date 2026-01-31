const Help: React.FC = () => {
  return (
    <section className="help"> 
     <h2>Comment Pouvez-Vous Aider?</h2> 
     <div className="help_content"> 
      <div className="help-left">
        <p>Vous pouvez nous aider de trois manières :</p>
      </div>

      <div className="help-actions">
        <button>1. Faire un don </button>
        <button>2. Devenir ambassadeur </button>
        <button>3. Devenir membre </button>
      </div> 

     </div>
      
    </section>
  );
};

export default Help;
